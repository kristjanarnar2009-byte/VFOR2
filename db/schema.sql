CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INTEGER CHECK (year > 1880),
  genre VARCHAR(64),
  image_url VARCHAR(255)
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, year, genre, image_url, description) VALUES
('How to Train your Dragon', 2010, 'fantasy', '/images/dragon.jpg', 'Víkingar og drekar'),
('Wall-E', 2008, 'Sci-Fi', '/images/wall_e.jpg'),
('My little Pony:The Movie', 2017, 'Musical Fantasy', '/images/mlp.jpg', 'Singing ponies trying to save the world');

SELECT * FROM movies;