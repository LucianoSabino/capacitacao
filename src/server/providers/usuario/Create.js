import { Knex } from "../../database/Knex/index.js";

export const create = async (data) => {
  try {
    const [result] = await Knex("usuarios").insert(data).returning("id");
    if (typeof result === "object" && result.id) {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    throw new Error("Erro ao cadastrar o Usuario!");
  } catch (error) {
    return new Error("Erro ao cadastrar o usuario!");
  }
};
