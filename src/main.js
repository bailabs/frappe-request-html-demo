import { FrappeRequest } from "frappe-requests";

export default async function frappe(username, password) {
  var frappe = await FrappeRequest("192.168.88.128:8004", username, password);
}
