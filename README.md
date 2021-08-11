# db-checkpoint

- our first query set up the first two tables with their respective data

```
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
```

## Queries

- All of the vacation destinations.
```
SELECT (name) FROM vacation_data;
```
- All destinations where you can swim at the beach.
```
SELECT (name) FROM vacation_data WHERE has_beaches = true;
```
- All destinations where the average temperature is over 60 degrees.
```
SELECT (name) FROM vacation_data WHERE average_temp >= 60;
```
- All destinations that have both beaches and mountains.
```
SELECT (name) FROM vacation_data WHERE has_beaches = true AND has_mountains = true;
```
- All destinations that have flights under 500 dollars and mountains to hike.
```
SELECT (name) FROM vacation_data WHERE cost_of_flight < 500 AND has_mountains = true;
```
- Add an entry for The Bahamas, where the average temperature is 78, it has beaches but no mountains, and the flights cost $345.
```
INSERT INTO vacation_data (
        name, average_temp, cost_of_flight, has_beaches, has_mountains)

VALUES ('Bahamas', 78, 345, true, false);
```
- Turns out, the cost of flights to New Zealand has increased! Update New Zealand's entry for flight cost to $1000.
```
UPDATE vacation_data
SET cost_of_flight = 1000
WHERE name = 'New Zealand';
```
- Turns out, Minnesota isn't a vacation destination. Please delete it from the database.
```
DELETE FROM vacation_data WHERE vacation_data.name = 'Minnesota';
```
- When the data set was written, the author mistakently wrote "England" when they actually meant "Scotland". Please update that entry in the database.
```
UPDATE vacation_data
SET name = 'Scotland'
WHERE name = 'England';
```
- Create a join table that joins the airlines and the destinations tables by correlating which airlines fly to which destinations.
```

```
