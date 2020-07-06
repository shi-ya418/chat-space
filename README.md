# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|nickname|string|null: false|
|password|string|null: false|
|chat_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :chats
- has_many :groups, through: groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|chat_id|integer|null: false, foreign_key: true|
### Association
- has_many :chats
- has_many :users, through: groups_users

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|chat_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
