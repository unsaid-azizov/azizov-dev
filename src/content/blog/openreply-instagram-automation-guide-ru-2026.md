---
title: "OpenReply вместо ManyChat: установка Instagram comment-to-DM"
pageTitle: "OpenReply для Instagram: установка, Meta API и лимиты"
language: "ru"
date: 2026-09-18
category: "article"
description: "Как развернуть OpenReply, подключить Instagram через официальный Meta API, настроить comment-to-DM кампанию и не пропустить обязательные Meta-требования."
tags: ["Instagram", "OpenReply", "ManyChat", "ChatPlace", "автоматизация", "лидогенерация", "Meta API", "webhooks", "Said Azizov", "Саид Азизов"]
featured: true
---

[OpenReply](https://github.com/diwenne/openreply) — self-hosted альтернатива ManyChat/ChatPlace для механики «комментарий с ключевым словом → личное сообщение в Instagram». В нём есть кампании, follow-up, кнопки, ссылки, inbox и логи.

Ниже короткий путь от сервера до первого тестового DM. Он рассчитан на свой Instagram-аккаунт. Подключение аккаунтов клиентов к одному общему Meta App — отдельная задача с App Review и расширенными permissions.

## Что понадобится

- профессиональный Instagram-аккаунт;
- VPS с Docker и публичный домен;
- HTTPS для кабинета и webhook;
- Meta developer account;
- email provider для magic-link входа, например [Resend](https://resend.com/);
- публичные страницы Privacy Policy, Terms и Data Deletion.

## 1. Разверните OpenReply

Следуйте инструкции в [репозитории OpenReply](https://github.com/diwenne/openreply). На сервере нужны web-приложение, worker, Postgres и Redis.

Привяжите домен и проверьте, что кабинет открывается по HTTPS.

Важно: для входа OpenReply отправляет magic link. Настройте `RESEND_API_KEY` и `EMAIL_FROM`, перезапустите контейнеры и проверьте вход реальным письмом. Случайный Gmail-адрес нельзя использовать как verified sender.

## 2. Создайте Meta App

В [Meta Developers](https://developers.facebook.com/apps/) создайте приложение и добавьте use case **Instagram API** для сообщений и контента.

Для comment-to-DM нужны permissions, которые Meta показывает для этого use case:

- `instagram_business_basic`;
- `instagram_business_manage_comments`;
- `instagram_business_manage_messages`.

Актуальная документация: [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/).

Важно: старые видео часто показывают пункты интерфейса, которых в новом Meta dashboard уже нет. Ориентируйтесь на выбранный use case и названия permissions, а не на старое меню Products.

## 3. Подключите Instagram-аккаунт

1. Переведите аккаунт в professional account.
2. Добавьте его в роли Meta App как **Instagram Tester**.
3. Примите приглашение из этого Instagram-аккаунта.
4. В Meta сгенерируйте access token.
5. Подключите аккаунт в OpenReply.

Tester-режим подходит для собственного аккаунта и проверки. Для произвольных аккаунтов клиентов нужен отдельный корректный login flow и доступ, одобренный Meta.

## 4. Настройте webhook

OpenReply должен получить событие о новом комментарии. В настройках Instagram use case укажите:

- callback URL вашего OpenReply;
- verify token из конфигурации OpenReply;
- нужные webhook subscriptions для комментариев и сообщений.

Meta проверит callback URL. Сервер должен ответить verification challenge с тем же verify token.

Перед запуском оставьте новый комментарий с другого тестового аккаунта и проверьте путь: комментарий появился в логах → кампания сработала → пришёл DM.

Ссылки: [Meta Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) и [Instagram webhooks](https://developers.facebook.com/docs/instagram-platform/webhooks/).

## 5. Подготовьте обязательные страницы и опубликуйте App

До публикации добавьте в Meta App:

- Privacy Policy URL;
- Terms of Service URL;
- Data Deletion Instructions URL;
- contact email;
- рабочий HTTPS callback URL.

В privacy policy опишите только то, что реально делаете: Instagram username/ID, комментарии, DM, email, срок хранения и как запросить удаление. Не копируйте чужую политику как юридический шаблон.

После этого опубликуйте приложение. Публикация даёт доступ к live-сценарию, но не отменяет лимиты Meta.

Политики и требования:

- [Meta Platform Terms](https://developers.facebook.com/terms/)
- [Meta Developer Policies](https://developers.facebook.com/policy/)
- [App Review](https://developers.facebook.com/docs/app-review/)
- [Data Deletion Callback](https://developers.facebook.com/docs/development/create-a-bot/data-deletion-callback/)
- [Data Use Checkup](https://developers.facebook.com/docs/development/data-use-checkup/)
- [Instagram Community Guidelines](https://help.instagram.com/477434105621119)

## 6. Создайте первую кампанию

Начните с одного Reels и одного ключевого слова.

```text
Reels: разбор OpenReply
Первый комментарий: «Напиши ЛИДЫ — пришлю гайд»
Триггер кампании: ЛИДЫ
DM: ссылка на гайд
```

Не добавляйте follow-up, пока не проверили базовый comment → DM. Сначала получите несколько тестовых срабатываний и посмотрите логи.

## Лимиты и расходы

Лицензия OpenReply бесплатная, но это не безлимитный сервис.

- OpenReply ограничивает **750 private replies в час на один профессиональный Instagram-аккаунт**. После лимита он переносит задачу на 30 минут; после трёх переносов пропускает её. Это защитный потолок для comment-to-DM, а не обещанная производительность. Исходник: [rate-limiter.ts](https://github.com/diwenne/openreply/blob/main/lib/utils/rate-limiter.ts).
- Meta отдельно применяет общую квоту API-вызовов приложения. В Developer Dashboard она отображается как **200 × число пользователей приложения в час**. Это общая квота приложения, а не 200 на каждого пользователя.
- Фактическая пропускная способность — меньшая из private-reply лимита и доступного API-бюджета. Meta может начать throttling раньше.
- Нельзя купить пакет API-вызовов в Meta и снять эти ограничения публикацией приложения. [Meta rate limiting](https://developers.facebook.com/docs/graph-api/overview/rate-limiting/).

Платить всё равно придётся за VPS, домен, email provider, бэкапы и поддержку. При работе через официальный Meta API в этой схеме нет отдельной цены за каждое comment-to-DM сообщение.

## Можно ли white-label-ить

Да. У OpenReply [MIT-лицензия](https://github.com/diwenne/openreply/blob/main/LICENSE): код можно использовать, менять, хостить и продавать как часть своей услуги. Сохраните copyright notice и текст лицензии. Meta policies при этом остаются обязательными.

Для GTM-команд и агентств OpenReply может быть одним из каналов в более крупной системе. Я занимаюсь такими системами отдельно. Если это ваш случай, [напишите мне](https://azizovhq.com/#contact).
