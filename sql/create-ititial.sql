CREATE TABLE vacation_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    average_temp int,
    cost_of_flight int,
    has_beaches BOOLEAN,
    has_mountains BOOLEAN
);

INSERT INTO vacation_data (
       name, average_temp, cost_of_flight, has_beaches, has_mountains
)
VALUES
    ('Thailand', 82, 765, true, true),
    ('Minnesota', 41, 235, false, false),
    ('New Zealand', 66, 433, true, true),
    ('England', 45, 290, false, false),
    ('Tristan da Cunha', 59, 1304, true, true);

CREATE TABLE airline_data (
    id SERIAL PRIMARY KEY,
    airline_name VARCHAR (255) NOT NULL,
    destinations_flown_to TEXT[]
);

INSERT INTO airline_data (airline_name, destinations_flown_to)
VALUES
    ('Spirit', '{"New Zealand", "Scotland"}'),
    ('Lufthansa', '{"Tristan da Cunha", "Scotland", "Thailand"}'),
    ('Delta', '{"Thailand", "Minnesota", "England", "Scotland"}'),
    ('Southwest', '{"New Zealand", "Tristan da Cunha", "Minnesota"}');