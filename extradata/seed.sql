use employees_DB


/*
Joins */;

SELECT first_name, last_name, title
FROM employee LEFT JOIN role ON employee.role_id = role.id
ORDER BY title;
SELECT first_name, last_name, dept_name
FROM employee LEFT JOIN department ON employee.dept_id = department.id
ORDER BY dept_name;

/*
Selects*/;

SELECT *
FROM employee;
SELECT *
FROM role;
SELECT *
FROM department;


/*
Seeds*/;

insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Jannelle', 'Corwood', 1, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Aurilia', 'Lackmann', 2, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Jewelle', 'Fried', 3, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Othello', 'Pepye', 4, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Bunni', 'Genty', 5, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Annie', 'Isacq', 6, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Bucky', 'Biernacki', 7, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Ellsworth', 'Grinston', 8, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Ingemar', 'Bett', 9, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Lindon', 'Harbison', 10, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Tisha', 'Baudet', 11, 1, 4);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Zelma', 'Billiard', 12, 1, 4);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Karalee', 'Hembling', 13, 1, 4);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Bradney', 'Elderidge', 14, 1, 5);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Olia', 'Isley', 15, 1, 5);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Laird', 'Bromilow', 16, 1, 5);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Garrick', 'Rimer', 7, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Leigha', 'Mee', 8, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Gus', 'Browell', 9, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Antonius', 'Espinas', 2, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Wash', 'Blackmore', 1, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Amil', 'Le Friec', 2, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Preston', 'Summerbell', 3, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Shayla', 'Krabbe', 4, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Cleon', 'Mayo', 5, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Peadar', 'Ornillos', 6, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Wayne', 'Barmby', 7, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Cally', 'Fortey', 8, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Shandee', 'Elfe', 9, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Richmound', 'Brodie', 3, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Clotilda', 'Genders', 1, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Camellia', 'Codlin', 2, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Nora', 'Locksley', 3, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Zachary', 'Blakey', 4, 1, 1);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Gaspar', 'Hanham', 5, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Lorenza', 'Monelle', 6, 1, 2);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Aggy', 'Hamilton', 7, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Kattie', 'Theobalds', 8, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Konstantine', 'Bazek', 9, 1, 3);
insert into employee
    (first_name, last_name, role_id, manager_id, dept_id)
values
    ('Washington', 'Scahill', 4, 1, 1);
insert into role
    (title, salary, dept_id)
values
    ('Junior Developer I', 70000.00, 1);
insert into role
    (title, salary, dept_id)
values
    ('Developer II', 110000.00, 1);
insert into role
    (title, salary, dept_id)
values
    ('Developer III', 140000.00, 1);
insert into role
    (title, salary, dept_id)
values
    ('Developer Manager', 160000.00, 1);
insert into role
    (title, salary, dept_id)
values
    ('Help Desk Manager', 90000.00, 2);
insert into role
    (title, salary, dept_id)
values
    ('Help Desk Technician', 60000.00, 2);
insert into role
    (title, salary, dept_id)
values
    ('VP Marketing', 300000, 3);
insert into role
    (title, salary, dept_id)
values
    ('Marketing Manager', 120000.00, 3);
insert into role
    (title, salary, dept_id)
values
    ('Marketing Assistant', 60000, 3);
insert into role
    (title, salary, dept_id)
values
    ('Marketing Director I', 950000.00, 3);
insert into role
    (title, salary, dept_id)
values
    ('Account Manager', 140000.00, 4);
insert into role
    (title, salary, dept_id)
values
    ('Account Director', 1000000.00, 4);
insert into role
    (title, salary, dept_id)
values
    ('Account Exectutive', 200000.00, 4);
insert into role
    (title, salary, dept_id)
values
    ('CEO', 500000.00, 5);
insert into role
    (title, salary, dept_id)
values
    ('CFO', 450000.00, 5);
insert into role
    (title, salary, dept_id)
values
    ('Board Member', 700000.00, 5);
insert into department
    (dept_name)
values
    ('Technology');
insert into department
    (dept_name)
values
    ('Help Desk');
insert into department
    (dept_name)
values
    ('Marketing');
insert into department
    (dept_name)
values
    ('Sales');
insert into department
    (dept_name)
values
    ('BIGWIGS');
