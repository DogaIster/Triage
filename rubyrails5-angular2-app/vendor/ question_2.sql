--First Question
--Since it is case sensitive all of them should be lower case
SELECT DISTINCT * FROM patients_table WHERE LOWER(last_name) LIKE '%mit%';

--Second question, first solution

--This query returns all attributes:
SELECT DISTINCT * 
FROM patients_table
INNER JOIN encourters_table 
ON patients_table.id=encourters_table.patient_id
WHERE discharged_at IS NOT NULL;

--This query changes the patients_table.id as patient id and encourters_table.id as encourters_id (for the first option)
SELECT DISTINCT patients_table.id AS patient_id, patients_table.first_name AS first_name, patients_table.middle_name AS middle_name,patients_table.last_name AS last_name, patients_table.weight AS weight, patients_table.height AS height, encourters_table.id AS encourters_id, encourters_table.visit_number AS visit_number, encourters_table.admitted_at AS admitted_at, encourters_table.discharged_at AS discharged_at, encourters_table.location AS location, encourters_table.room AS room, encourters_table.bed AS bed, encourters_table.patient_id AS patient_id 
FROM patients_table
INNER JOIN encourters_table 
ON patients_table.id=encourters_table.patient_id
WHERE discharged_at IS NOT NULL;

--This query returns oly the first,middle and last names; of the patients
SELECT DISTINCT first_name ||' '|| middle_name ||' '|| last_name
AS full_name_of_patients_encourtered
FROM patients_table
INNER JOIN encourters_table 
ON patients_table.id=encourters_table.patient_id
WHERE discharged_at IS NOT NULL;

--Third question

--This query returns all attributes as they are 
SELECT DISTINCT *
FROM patients_table
INNER JOIN encourters_table
ON patients_table.id=encourters_table.patient_id
WHERE admitted_at 
BETWEEN '2014-07-05' AND '2014-09-19';

--This query changes the patients_table.id as patient id and encourters_table.id as encourters_id
SELECT DISTINCT patients_table.id AS patient_id, patients_table.first_name AS first_name, patients_table.middle_name AS middle_name,patients_table.last_name AS last_name, patients_table.weight AS weight, patients_table.height AS height, encourters_table.id AS encourters_id, encourters_table.visit_number AS visit_number, encourters_table.admitted_at AS admitted_at, encourters_table.discharged_at AS discharged_at, encourters_table.location AS location, encourters_table.room AS room, encourters_table.bed AS bed, encourters_table.patient_id AS patient_id 
FROM patients_table
INNER JOIN encourters_table
ON patients_table.id=encourters_table.patient_id
WHERE admitted_at 
BETWEEN '2014-07-05' AND '2014-09-19';

