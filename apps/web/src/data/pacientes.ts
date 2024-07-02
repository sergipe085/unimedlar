import { db } from "../lib/db";

export async function getPacientes() {
    const pacientes = await db.paciente.findMany();

    return pacientes;
}
