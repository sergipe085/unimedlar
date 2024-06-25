import { db } from "@/schemas/lib/db";

export async function getPacientes() {
    const pacientes = await db.paciente.findMany();

    return pacientes;
}
