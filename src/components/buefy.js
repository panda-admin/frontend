import Vue from 'vue';
import * as Table from "buefy/src/components/table";
import Input from "buefy/src/components/input/Input";
import Field from "buefy/src/components/field/Field";

Vue.component('b-table', Table.Table);
Vue.component('b-table-column', Table.TableColumn);

Vue.component('b-field', Field);
Vue.component('b-input', Input);
