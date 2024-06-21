export function formatDateString(dateString: string) {
    if (!dateString) {
        return "nunca"
    }
    
    return new Date(dateString).toLocaleDateString("pt-BR");
}