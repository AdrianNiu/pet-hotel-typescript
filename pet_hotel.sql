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
  "image_url" VARCHAR (1000)
);


INSERT INTO "user" ("username", "password")
VALUES ('alsisonsmith', 'alisonsmith'),
('danmariao', 'danmariao');

INSERT INTO "pet" ("user_id", "pet_name", "pet_color", "pet_breed", "check_in")
VALUES ('1','Beau', 'Grey', 'Siberian Husky', 'true'),
('2','Yoda', 'Black', 'Dobermann', 'true'),
('2','Ziggy', 'White', 'Samoyed', 'false'),
('1','Zeus', 'Brown', 'GreyHound', 'true'),
('1','Milo', 'Black', 'Pug', 'false'),
('1','Bo Bo', 'Brown', 'PitBull', 'false');