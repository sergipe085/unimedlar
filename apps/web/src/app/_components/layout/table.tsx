"use client"

import { locale } from '@/lib/syncfusion';
import { L10n } from '@syncfusion/ej2-base';
import { Resize } from '@syncfusion/ej2-react-grids';
import { ColumnDirective, ColumnsDirective, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import { JPCard } from './jp-card';
L10n.load(locale);

interface PropsTable {
    data: any[],
    columns: any[],
    rowTemplates: any[],
}

export function Table({ rowTemplates, data, columns }: PropsTable) {
    const FilterOptions: FilterSettingsModel = {
        type: 'Excel'
    };

    const rowTemplate = (rowData: any) => {
        return (
            <tr className='h-10'>
                {
                    rowTemplates?.map((column, index) => (
                        <td className={`px-5 text-${column.textAlign}`} key={index}>{rowData[column.field]}</td>
                    ))
                }
            </tr>
        );
    };

    const pageSettings = { pageSize: 100 };

    return (
        <JPCard>
            <GridComponent className=' border-none' locale='pt-BR' height={600} rowTemplate={rowTemplate} pageSettings={pageSettings} showColumnChooser
                dataSource={data} filterSettings={FilterOptions} allowFiltering={true} allowPaging={true} allowSorting={true}>
                <ColumnsDirective >
                {
                        columns?.map(c => (
                            <ColumnDirective key={c.field} field={  c.field} headerText={c.header} width='300' textAlign={c.textAlign} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Filter, Sort, Toolbar, Resize]} />
            </GridComponent>

        </JPCard>

    )
}