import { usePatientStore } from "../store/store"

export default function PatientsList() {
    const { patients } = usePatientStore()
    return (
        <div>
            {patients.map(patient => (
                <div key={patient.id}>
                    <p>
                        {patient.name}
                    </p>
                </div>
            ))}
        </div>
    )
}