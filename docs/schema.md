# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
profile_pic     | link      | not null, set default
bio             | string    | can be null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | can be null
content     | text      | not null
caption     | string    | can be null
type        | string    | not null, included in [txt, img, quote, link, chat, audio, video ]

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique pair with followee_id
followee_id | integer   | not null, foreign key (references users), indexed, unique pair with follower_id

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id    | integer   | not null, foreign key (references users), indexed, unique pair with post_id
post_id     | integer   | not null, foreign key (references posts), indexed, unique pair with liker_id
