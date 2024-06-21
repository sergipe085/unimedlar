import * as fs from 'fs';
import * as cron from 'cron';

interface JobTime {
    hour: number;
    minute: number;
}

interface IInitializeJobs {
    times: JobTime[];
    _job: () => Promise<void>
}

export function initializeJobs({ times, _job }: IInitializeJobs) {
    times.forEach((time) => {
        const cronExpression = `${time.minute} ${time.hour} * * *`;
        const job = new cron.CronJob(cronExpression, async () => {
            console.log("-- EXECUTANDO JOB EM " + new Date())
            await _job();
        }, null, true, 'America/Sao_Paulo');
        job.start();
        console.log("-- JOB INICIALIZADO COM SUCESSO PARA " + time.hour + ":" + time.minute);
    });
}

