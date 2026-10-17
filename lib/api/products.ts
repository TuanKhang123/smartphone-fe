import apiClient from "../api-client";
import { ApiProduct } from "@/lib/api-types";

export const getProducts = async (): Promise<ApiProduct[]> => {
  const response = await apiClient.get<ApiProduct[]>("/products");

  return response.data;
};
