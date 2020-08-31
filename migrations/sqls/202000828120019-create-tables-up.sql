CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";


CREATE TABLE NOTIFICATIONS (
    ID CHARACTER VARYING(40) COLLATE pg_catalog."default" NOT NULL DEFAULT uuid_generate_v4(),
    USER_ID CHARACTER VARYING(40),
    TITLE VARCHAR(250),
    BODY VARCHAR(250),
    VIEWED BOOLEAN  DEFAULT FALSE,
    PRIMARY KEY(ID)
);

INSERT INTO NOTIFICATIONS(USER_ID, TITLE, BODY) VALUES ('ca0a038c-581f-4275-9897-6a66231392d3', 'Your Tax Bill Is Coming Up', '2021 is right around the corner');
INSERT INTO NOTIFICATIONS(USER_ID, TITLE, BODY) VALUES ('ca0a038c-581f-4275-9897-6a66231392d3', 'Rainy Day Fund is drying up', 'Make sure you maintain a certain balance');
INSERT INTO NOTIFICATIONS(USER_ID, TITLE, BODY) VALUES ('ca0a038c-581f-4275-9897-6a66231392d3', 'You just raised another 20%', 'Check out your fund development campaign');
INSERT INTO NOTIFICATIONS(USER_ID, TITLE, BODY) VALUES ('ca0a038c-581f-4275-9897-6a66231392d3', 'Check out your filing options', 'Looks like you may have some options available');



