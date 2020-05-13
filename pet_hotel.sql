CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL);

CREATE TABLE "pet" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "pet_name" VARCHAR (80),
  "pet_color" VARCHAR (80),
  "pet_breed" VARCHAR (80),
  "check_in" BOOLEAN,
);
