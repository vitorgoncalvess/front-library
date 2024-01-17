import React from "react";
import Table from "../lib/table/Table";
import Button from "../lib/button/Button";
import TableHead from "../lib/table/TableHead";
import TableRow from "../lib/table/TableRow";
import TableCol from "../lib/table/TableCol";
import TableBody from "../lib/table/TableBody";
import TableCell from "../lib/table/TableCell";
import getColumnKey from "../lib/table/getColumnKey";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  component: Table,
};

const items = [
  {
    id: 1,
    nome: "Vitor",
    cpf: "46045098838",
    email: "vitor@gmail.com",
  },
  { id: 2, nome: "Carlos", cpf: "11508453845", email: "carlos@gmail.com" },
  { id: 3, nome: "Leo", cpf: "75580441037", email: "leo@gmail.com" },
  { id: 4, nome: "Julia", cpf: "48215853080", email: "julia@gmail.com" },
  { id: 5, nome: "Joaquim", cpf: "69896985006", email: "joaguim@gmail.com" },
  {
    id: 6,
    nome: "Pedro",
    cpf: "47226039010",
    email: "pedro@gmail.com",
  },
];

const columns = [
  { label: "ID", key: "id" },
  { label: "Nome", key: "nome" },
  { label: "CPF", key: "cpf" },
  { label: "E-mail", key: "email" },
];

type Story = StoryObj<typeof Table>;

export const Base: Story = {
  args: {
    children: (
      <>
        <TableHead columns={columns}>
          {(col) => <TableCol key={col.key}>{col.label}</TableCol>}
        </TableHead>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.cpf}>
              {(colKey) => (
                <TableCell key={colKey}>{getColumnKey(item, colKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </>
    ),
  },
};

const normalizeCpf = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

type Item = (typeof items)[0];

const customRow = (item: Item, colKey: string) => {
  const content = item[colKey as keyof Item];
  switch (colKey) {
    case "cpf":
      return normalizeCpf("" + content);
    default:
      return content;
  }
};

export const CustomRow = {
  args: {
    children: (
      <>
        <TableHead columns={columns}>
          {(col) => <TableCol key={col.key}>{col.label}</TableCol>}
        </TableHead>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.cpf}>
              {(colKey) => (
                <TableCell key={colKey}>{customRow(item, colKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </>
    ),
  },
};

export const NoContent = {
  args: {
    children: (
      <>
        <TableHead columns={columns}>
          {(col) => <TableCol key={col.key}>{col.label}</TableCol>}
        </TableHead>
        <TableBody emptyContent="Nenhum item para visualizar."></TableBody>
      </>
    ),
  },
};

const getCustomRow = (item: Item, colKey: string) => {
  const content = item[colKey as keyof Item];
  switch (colKey) {
    case "cpf":
      return normalizeCpf("" + content);
    case "email":
      return (
        <div className="flex items-center gap-2">
          <span className="text-blue-500 cursor-pointer">{content}</span>
        </div>
      );
    default:
      return content;
  }
};

export const CustomTable: Story = {
  args: {
    classNames: {
      base: "bg-transparent",
      th: "bg-blue-400 text-white",
      td: "font-normal",
    },
    topContent: (
      <div className="w-full flex gap-4">
        <input
          className="border-2 h-12 grow rounded-md p-2 outline-none"
          type="text"
        />
        <Button color="success">Adicionar</Button>
        <Button color="primary">Baixar</Button>
      </div>
    ),
    children: (
      <>
        <TableHead columns={columns}>
          {(col) => <TableCol key={col.key}>{col.label}</TableCol>}
        </TableHead>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.cpf}>
              {(colKey) => <TableCell>{getCustomRow(item, colKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </>
    ),
  },
};

export default meta;
