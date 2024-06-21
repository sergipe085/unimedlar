import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatarData(data: Date) {
    return formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
}