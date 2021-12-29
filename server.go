package main

import(
	"net/http"
	"fmt"
)
func Handle(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS")
	r.ParseMultipartForm(0)
	response := r.FormValue("value")
	fmt.Fprintf(w, response)
}
func main() {
	http.HandleFunc("/", Handle)
	http.ListenAndServe("192.168.1.1:3000", nil)
}
