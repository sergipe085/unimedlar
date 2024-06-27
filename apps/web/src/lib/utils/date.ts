export function getDatesInRange(startDate: Date, endDate: Date, intervalInDays: number): Date[] {
    let dates: Date[] = [];
    let currentDate: Date = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate)); // Adiciona a data atual ao array

        // Incrementa a data atual pelo intervalo especificado
        currentDate.setDate(currentDate.getDate() + intervalInDays);
    }

    return dates;
}
