
DROP TABLE questions_follows; 
DROP TABLE questions_likes; 
DROP TABLE replies; 
DROP TABLE questions; 
DROP TABLE IF EXISTS users; 

PRAGMA foreign_keys = ON ;

CREATE TABLE users(
   id INTEGER PRIMARY KEY ,
   fname VARCHAR(250) NOT NULL ,
   lname VARCHAR(250) NOT NULL    
);

INSERT INTO
    users (fname, lname)
VALUES
    ('Sergey','Griddin'), 
    ('Tommy','Duek'), 
    ('Mashu','Duek');

CREATE TABLE questions(
   id INTEGER PRIMARY KEY ,
   title VARCHAR(250) NOT NULL ,
   body VARCHAR(250) NOT NULL, 
   author_id INTEGER NOT NULL,  
   FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO
    questions (title, body, author_id)
VALUES
    ('Sergey Q','Question about it S', (SELECT id FROM users WHERE fname = 'Sergey')), 
    ('Tommy Q','Question about it T', (SELECT id FROM users WHERE fname= 'Tommy' AND lname = 'Duek')), 
    ('Mashu Q', 'Question about it M', (SELECT id FROM users WHERE fname= 'Mashu' AND lname = 'Duek'));

CREATE TABLE questions_follows(
   id INTEGER PRIMARY KEY, 
   user_id INTEGER NOT NULL,
   question_id INTEGER NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id) ,
   FOREIGN KEY (question_id) REFERENCES questions(id)   
);

INSERT INTO 
    questions_follows(user_id, question_id)
VALUES
    ((SELECT id FROM users where fname = 'Sergey' AND lname = 'Griddin'),(SELECT id FROM questions WHERE title = 'Sergey Q')),
    ((SELECT id FROM users where fname = 'Tommy' AND lname = 'Duek'),(SELECT id FROM questions WHERE title = 'Tommy Q')),
    ((SELECT id FROM users where fname = 'Mashu' AND lname = 'Duek'),(SELECT id FROM questions WHERE title = 'Mashu Q'));


CREATE TABLE replies(
   id INTEGER PRIMARY KEY, 
   body TEXT NOT NULL,
   author_id INTEGER NOT NULL,
   question_id INTEGER NOT NULL,
   parent_id INTEGER,
   FOREIGN KEY (author_id) REFERENCES users(id) ,
   FOREIGN KEY (question_id) REFERENCES questions(id), 
   FOREIGN KEY (parent_id) REFERENCES replies(id)
);

INSERT INTO 
    replies(body, author_id, question_id, parent_id)
VALUES
    ("Answer to Sergey Question",(SELECT id FROM users where fname = 'Sergey' AND lname = 'Griddin'), (SELECT id FROM questions WHERE title = 'Sergey Q'),NULL),
    ("Answer to Tommy Question",(SELECT id FROM users where fname = 'Tommy' AND lname = 'Duek'), (SELECT id FROM questions WHERE title = 'Tommy Q'),(SELECT id FROM replies WHERE body = "Answer to Sergey Question")),
    ("Answer to Mashu Question",(SELECT id FROM users where fname = 'Mashu' AND lname = 'Duek'),(SELECT id FROM questions WHERE title = 'Mashu Q'),(SELECT id FROM replies WHERE body = "Answer to Tommy Question"));


CREATE TABLE questions_likes(
   id INTEGER PRIMARY KEY ,
   user_id INTEGER NOT NULL,
   question_id INTEGER NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id) ,
   FOREIGN KEY (question_id) REFERENCES questions(id)   
);
INSERT INTO
    questions_likes(user_id,question_id)
VALUES
    ((SELECT id FROM users where fname = 'Sergey' AND lname = 'Griddin'),(SELECT id FROM questions WHERE title = 'Sergey Q')),
    ((SELECT id FROM users where fname = 'Tommy' AND lname = 'Duek'),(SELECT id FROM questions WHERE title = 'Tommy Q'));
