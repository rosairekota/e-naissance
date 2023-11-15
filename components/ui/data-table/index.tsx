import Image from 'next/image';
import {
  ReactFragment,
  ReactPortal,
  Key,
  EventHandler,
  SyntheticEvent,
} from 'react';

type TableAction<T> = {
  label?: string;
  icon: JSX.Element;
  onAction?: (item: T) => EventHandler<SyntheticEvent>;
};
interface TableDataProps<T> {
  data: Array<T>;
  columns: Array<keyof T>;
  renderColumns?: (props: any) => JSX.Element;
  actions?: Array<TableAction<T>>;
  isFullWidth?: boolean;
  isSelectable?: boolean;
  isAllSelected?: boolean;
  rowId?: keyof T;
  selectableLabel?: keyof T;
  onSelectionChange?: (isSelected: boolean, selected: T) => void;
  onAllSelectionChange?: (isSelected: boolean, selected: Array<T>) => void;
  selectionKey?: keyof T;
  onRowClick?: (row: T) => void;
}

export function DataTable<T>({
  data,
  columns: visibleColumns = [],
  renderColumns: ColumnComponent,
  //TODO: Add an actions array to accept functions for action with icons or text,
  actions,
  isFullWidth,
  isSelectable,
  rowId,
  isAllSelected,
  selectableLabel,
  selectionKey,
  onSelectionChange,
  onAllSelectionChange,
  onRowClick,
}: TableDataProps<T>) {
  const columns =
    data[0] &&
    Object.keys(data[0]).filter((column) =>
      visibleColumns.includes(column as keyof T)
    );
  //TODO: const imageFormats = ["apng", "avif", "gif", "jpeg", "jpg", "jiff", "pjpeg", "pjp", "png", "svg", "webp"];
  return (
    <div className="flex flex-col w-full ">
      <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className={`shadow  border-b border-gray-200 ${
              !!isFullWidth && isFullWidth === true ? '' : 'sm:rounded-lg'
            }`}
          >
            <table
              className="min-w-full border-separate"
              style={{ borderSpacing: 0 }}
            >
              <thead className="bg-gray-50">
                <tr>
                  {isSelectable && (
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur py-3.5 pl-4 pr-3 sm:pl-6 lg:pl-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        id="select-all"
                        name="select-all"
                        title="Select all"
                        placeholder="Select all"
                        type="checkbox"
                        className=""
                        checked={isAllSelected}
                        onChange={(e) => {
                          onAllSelectionChange?.(e.target.checked, data);
                        }}
                      />
                    </th>
                  )}
                  {data[0] &&
                    columns.map(
                      (
                        heading:
                          | boolean
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined,
                        index: Key | null | undefined,
                        array
                      ) => (
                        <th
                          key={index}
                          scope="col"
                          className={`sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur ${
                            index === 0
                              ? 'py-3.5 pl-4 pr-3 sm:pl-6 lg:pl-8'
                              : 'px-3 py-3.5'
                          } text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                        >
                          {/* TODO: Ad function to split every word */}
                          {heading}
                        </th>
                      )
                    )}

                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr
                    key={`${row[rowId as keyof T]}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onRowClick) {
                        onRowClick(row);
                      } else {
                        return;
                      }
                    }}
                  >
                    {isSelectable && (
                      <td
                        className={`py-3.5 pl-4 pr-3 sm:pl-6 lg:pl-8 text-sm whitespace-nowrap`}
                      >
                        {' '}
                        <input
                          title={`${
                            !!selectableLabel ? String(row[selectableLabel]) : i
                          }`}
                          type="checkbox"
                          className=""
                          checked={
                            !!(row[
                              selectionKey as keyof T
                            ] as unknown as boolean)
                          }
                          onChange={(e) => {
                            let isChecked = e.target.checked;
                            onSelectionChange?.(isChecked, row);
                          }}
                        />
                        {JSON.stringify(
                          row[selectionKey as keyof T] as unknown as boolean
                        )}
                      </td>
                    )}
                    {columns
                      .filter((column: string) =>
                        visibleColumns.includes(column as keyof T)
                      )
                      .map((column: string | number, index: any) => {
                        return (
                          <td
                            key={`colum-${index}`}
                            className={`${
                              index === 0
                                ? 'py-4 pl-4 pr-3 text-sm sm:pl-6'
                                : 'px-3 py-4'
                            } whitespace-nowrap`}
                          >
                            {ColumnComponent &&
                            ColumnComponent !== undefined &&
                            ColumnComponent !== null &&
                            row[column as keyof T] ? (
                              <ColumnComponent {...row} renderOn={column} />
                            ) : (
                              row[column as keyof T]
                            )}
                          </td>
                        );
                      })}
                    <td className="relative py-4 pl-3 pr-4 whitespace-nowrap text-right text-sm font-medium sm:pr-6">
                      {actions &&
                        actions.map((action) => (
                          <a
                            key={action.label}
                            onClick={action?.onAction?.(row)}
                            href="#"
                            className="flex flow-row items-center justify-center text-indigo-600 hover:text-indigo-900 gap-1 w-full"
                          >
                            {!!action.icon ? action.icon : null}
                            {action?.label ? action.label : 'Edit'}
                          </a>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
