# Spring-Boot-Rest
Приложение голосовалка.

Создание базы данных (PostgreSQL):

CREATE DATABASE myvoter;

create sequence seq_voter;
create sequence seq_answers;

СREATE TABLE voter
(
  id integer,
  question character varying(1000),
  start_date timestamp without time zone,
  close_date timestamp without time zone,
  isclosed boolean,
  CONSTRAINT voter_pkey PRIMARY KEY (id)
)

create table answers
(
  id integer primary key,
  answer character varying(1000),
  voter_id integer references voter(id),
  votes integer
)
