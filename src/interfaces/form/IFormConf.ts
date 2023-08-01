import {FormRules} from "naive-ui";
import {UnwrapNestedRefs} from "vue";

export interface IFormConf<TFormValues> {
    rules: FormRules,
    formValues:UnwrapNestedRefs<TFormValues>
}
