import { derived } from "svelte/store";
import { DataApi } from "../data";
import { app } from "./obsidian";

export const api = derived(app, ($app) => new DataApi($app));