CREATE TABLE history
(
    id serial NOT NULL,
    date timestamp with time zone,
    status character varying,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS history
    OWNER to postgres;