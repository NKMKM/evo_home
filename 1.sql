CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  buildingType TEXT,
  roomType TEXT,
  repairType TEXT,
  area INTEGER,
  urgency TEXT,
  additionalInfo TEXT,
  name TEXT,
  phone TEXT,
  promoCode TEXT,
  date TIMESTAMP
);

