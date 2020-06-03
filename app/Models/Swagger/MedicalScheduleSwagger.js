/**
* @swagger
*  definitions:
*    NewMedicalSchedule:
*      type: object
*      properties:
*        name:
*          type: string
*        date_appointment:
*          type: string
*        observation:
*          type: string
*        status:
*          type: string
*        patient_id:
*         type: integer
*         format: "int32"
*        prescription_medicament_id:
*         type: integer
*         format: "int32"
*        employee_id:
*         type: integer
*         format: "int32"
*      required:
*        - name
*        - date_appointment
*        - status
*        - patient_id
*        - employee_id
*    UpdateStatusMedicalSchedule:
*      type: object
*      properties:
*        status:
*          type: string
*      required:
*        - status
*/