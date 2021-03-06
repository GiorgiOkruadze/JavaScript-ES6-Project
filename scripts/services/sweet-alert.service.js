class SweetAlertService {
    
    //this function get function es a parameter (C# delegate like action)
    confirmationAlertOnElementDelete(action) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,   
          })
          .then((willDelete) => {
            if (willDelete) {
              action;
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    getSuccessAler(){
      swal({
        title: "Success !",
        text: "Operation passed successfuly",
        icon: "success",
        button: "Ok",
      });
    }

    getErrorMessage(){
      swal({
        title: "Error !",
        text: "Operation failed, pleace try again",
        icon: "error",
        button: "Ok!",
      });
    }
}