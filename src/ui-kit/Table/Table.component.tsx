import React from 'react';
import {
  StyledTable, StyledTd, StyledTh, StyledTitle,
} from './Table.styles';

interface TableColumn<Data> {
  id: keyof Data;
  name: string;
}

interface TableRow extends Record<string, string | number> {}

export function Table<Data extends TableRow>({
  columns,
  data,
  title,
}: {
  columns: TableColumn<Data>[];
  data: Data[];
  // eslint-disable-next-line react/require-default-props
  title?: string;
}) {
  if (columns.length !== Object.keys(data[0]).length) {
    return <div>Sorry, columns and data doesnt match</div>;
  }
  return (
    <>
      {title ? <StyledTitle>{title}</StyledTitle> : null}
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <StyledTh key={column.name}>{column.name}</StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={JSON.stringify(row)}>
              {Object.values(row).map((cell) => (
                <StyledTd key={cell}>{cell}</StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
