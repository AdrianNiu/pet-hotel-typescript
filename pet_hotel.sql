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
  "check_in" BOOLEAN
);


INSERT INTO "user" ("username", "password")
VALUES ('alsisonsmith', 'alisonsmith'),
('danmariao', 'danmariao');

INSERT INTO "pet" ("pet_name", "pet_color", "pet_breed", "check_in")
VALUES ('Beau', 'Grey', 'Siberian Husky', 'true'),
('Yoda', 'Black', 'Dobermann', 'true'),
('Ziggy', 'White', 'Samoyed', 'false'),
('Zeus', 'Brown', 'GreyHound', 'true'),
('Milo', 'Black', 'Pug', 'false');