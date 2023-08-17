import {Ref} from "vue";
import {IFormConf} from "@/interfaces/form/IFormConf.ts";
import {IRegValues} from "@/interfaces/form/reg/IRegValues.ts";
import {IRegOptions} from "@/interfaces/form/reg/IRegOptions.ts";

export interface IRegConf extends IFormConf<IRegValues>{
    options: Ref<IRegOptions[]>
}