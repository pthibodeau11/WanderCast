CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_first_name VARCHAR(125) NOT NULL,
  user_last_name VARCHAR(125) NOT NULL,
  user_birth_date DATE NOT NULL default CURRENT_DATE,
  user_profile_img TEXT,
  user_email VARCHAR(140) NOT NULL,
  hash TEXT NOT NULL,
  isAdmin BOOL NOT NULL, -- defaults to false
  isFeatured BOOL NOT NULL -- defaults to false
);

CREATE TABLE applications (
    app_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) NOT NULL,
    user_bio TEXT NOT NULL,
    app_timestamp TIMESTAMPTZ NOT NULL,
    user_experience TEXT NOT NULL,
    user_equipment TEXT NOT NULL,
    user_availability TEXT NOT NULL,
    isApproved BOOL NOT NULL,
    isStreamer BOOL NOT NULL
);

CREATE TABLE streams (
  stream_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id) NOT NULL,
  streamer_id INT REFERENCES applications(app_id),
  stream_title TEXT NOT NULL,
  stream_desc TEXT NOT NULL,
  stream_date DATE NOT NULL default CURRENT_DATE,
  stream_time TIMESTAMPTZ NOT NULL,
  stream_hours NUMERIC NOT NULL, -- how long (in hours) stream will last
  stream_category TEXT NOT NULL, -- would like this to be dropdown
  stream_country TEXT NOT NULL,
  stream_street TEXT NOT NULL,
  stream_state TEXT NOT NULL,
  stream_city TEXT NOT NULL,
  stream_zip INTEGER NOT NULL,
  stream_price NUMERIC, -- stream price is set by admin
  stream_img TEXT ,
  stream_live_link TEXT,
  stream_video_link TEXT,
  stream_equipment TEXT,
  isApproved BOOL NOT NULL -- streams are approved by admins
);

CREATE TABLE review (
  review_id SERIAL PRIMARY KEY,
  stream_id INT REFERENCES streams(stream_id) NOT NULL,
  user_id INT REFERENCES users(user_id) NOT NULL,
  streamer_id INT REFERENCES applications(app_id) NOT NULL, -- this is the streamer
  review_date DATE default CURRENT_DATE,
  review_text VARCHAR(500) NOT NULL,
  rating INT NOT NULL
);

CREATE TABLE purchases (
    purchase_id SERIAL PRIMARY KEY,
    stream_id INT REFERENCES streams(stream_id) NOT NULL,
    user_id INT REFERENCES users(user_id) NOT NULL,
    streamer_id INT REFERENCES applications(app_id) NOT NULL,
    purchase_timestamp TIMESTAMPTZ NOT NULL
)