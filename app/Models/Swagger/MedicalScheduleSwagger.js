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
 *        - patient_id
 *        - employee_id
 *    UpdateStatusMedicalSchedule:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *      required:
 *        - status
 *    FinishMedicalSchedule:
 *      type: object
 *      properties:
 *        medicalSchedule:
 *          type: object
 *          properties:
 *            observation:
 *              type: string
 *            prescription_medicaments:
 *              type: integer
 *        requestExam:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              observation:
 *                type: string
 *              type_exam_id:
 *                type: integer
 *                format: "int32"
 *              medical_schedule_id:
 *                type: integer
 *                format: "int32"
 *              status:
 *                type: string
 *            required:
 *              - observation
 *              - type_exam_id
 *              - medical_schedule_id
 *              - status
 */
