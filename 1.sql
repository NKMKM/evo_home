CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL
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

