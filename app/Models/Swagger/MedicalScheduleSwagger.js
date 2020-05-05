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
*        status:
*          type: boolean
*        patient_id:
*         type: integer
*         format: "int32"
*        prescription_medicament_id:
*         type: integer
*         format: "int32"
*      required:
*        - name
*        - date_appointment
*        - status
*        - patient_id
*        - prescription_medicament_id
*/