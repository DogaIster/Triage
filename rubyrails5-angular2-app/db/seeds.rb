# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Patient.create!([
    {patientID: 1, mrn: 'THC123', firstName: 'James', middleName: 'John', lastName: 'Smith', weight: 85, height: 180},
    {patientID: 2, mrn: 'THC124', firstName: 'Sandy', middleName: 'Aria', lastName: 'Mits', weight: 55, height: 145},
    {patientID: 3, mrn: 'THC125', firstName: 'Bently', middleName: 'Frank', lastName: 'Lee', weight: 90, height: 170},
    {patientID: 4, mrn: 'THC126', firstName: 'Harry', middleName: 'Benson', lastName: 'Banner', weight: 25, height: 120}
])

Encourter.create!([
    {encourterID: 1, visitNumber: 'VN001', admittedAt: '2014-09-22 04:00:00', dischargedAt: '2014-09-24 14:00:00',
    location: 'Fifth Ward', room: 189, bed: 3, patientID: 1},

    {encourterID: 2, visitNumber: 'VN002', admittedAt: '2014-07-02 11:30:34', dischargedAt: '2014-07-08 16:34:00',
    location: 'ICU', room: 133, bed: 2, patientID: 1},

    {encourterID: 3, visitNumber: 'VN003', admittedAt: '2015-03-22 06:00:00', dischargedAt: '',
    location: 'ER', room: 3, bed: 5, patientID: 1},

    {encourterID: 4, visitNumber: 'VN004', admittedAt: '2014-08-01 18:24:22', dischargedAt: '2014-08-12 10:25:00',
    location: 'Fourth Ward', room: 2323, bed: 3, patientID: 2},

    {encourterID: 5, visitNumber: 'VN005', admittedAt: '2014-07-23 13:34:00', dischargedAt: '2014-07-29 14:22:00',
    location: 'Third Ward', room: 382, bed: 1, patientID: 3},

    {encourterID: 6, visitNumber: 'VN006', admittedAt: '2014-08-19 01:00:00', dischargedAt: ' 2014-08-23 08:30:00',
    location: 'Second Ward', room: 2329, bed: 2, patientID: 3},

    {encourterID: 7, visitNumber: 'VN007', admittedAt: '2015-02-19 12:23:45', dischargedAt: '',
    location: 'ICU', room: 2, bed: 6, patientID: 2},

    {encourterID: 8, visitNumber: 'VN008', admittedAt: '2014-07-04 23:59:00', dischargedAt: '',
    location: '', room: 0 , bed: 0, patientID: 4}
])
