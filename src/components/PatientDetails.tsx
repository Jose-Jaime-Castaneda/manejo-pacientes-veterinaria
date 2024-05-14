import { usePatientStore } from "../store/store";

export default function PatientDetails() {
    const { patients } = usePatientStore()

    return (
        <div>
            {patients.map((patient) => (
                <p>
                    {patient.name}
                </p>
            ))

            }
        </div>
    );
};