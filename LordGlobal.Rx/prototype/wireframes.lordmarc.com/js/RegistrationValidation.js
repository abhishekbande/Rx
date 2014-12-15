$(document).ready(function () {

    var fieldsValid;

    var i = 1;
    $("#add_row").click(function () {

//        $('#addr' + i).html("<td style='width:20px;'>" + (i + 1) + "</td><td style='width:260px;' class='style4'><textarea name='Medicine_Name'" + i + "' placeholder='Medicine Name' class='form-control input-md' style='border:0px;' /></textarea> </td><td align='left'> <input  name='Dosage" + i + "' type='checkbox'  >&nbsp; Morning  &nbsp; <input  name='Dosage" + i + "' type='checkbox'  >&nbsp; Afternoon  &nbsp; <input  name='Dosage" + i + "' type='checkbox'  >&nbsp; Evening <br/><input type='radio' name='dostime' />&nbsp; Prelunch &nbsp;<input type='radio' name='dostime' />&nbsp; Postlunch &nbsp;<input type='textbox' name='Comment' style='width:250px; border:0px;' placeholder='Comment' />  </td><td style='width:60px;' align='right'><input  name='Quantity" + i + "' type='text' placeholder='Qty'  class='form-control input-md' maxlength='3' style='border:0px; text-align:center; width:50px;'></td>");

        $('#addr' + i).html("<td style='width:20px;'>" + (i + 1) + "</td><td style='width:260px;' class='style4'><textarea name='Medicine_Name'" + i + "' placeholder='Medicine Name' class='form-control input-md' style='border:0px;' /></textarea> </td><td class='style11'><table><tr><td class='style7'><input name='Morning'" + i + "' type='checkbox' />&nbsp; Morning </td><td class='style14'><input name='dostime'" + i + "' type='radio' />&nbsp; Prelunch </td><td class='style13'><input type='radio' name='dostime' id='morning_post' />&nbsp; Postlunch</td></tr><tr><td class='style7'><input type='checkbox'" + i + "' name='Evening' />&nbsp; Afternoon </td><td class='style14'><input type='radio'" + i + "' name='dostime' />&nbsp; Prelunch </td><td class='style13'><input type='radio'" + i + "' name='dostime' id='aftr_post' />&nbsp; Postlunch</td></tr><tr><td class='style7'><input type='checkbox'" + i + "' name='Evening' />&nbsp; Evening </td><td class='style14'><input type='radio'" + i + "' name='dostime' />&nbsp; Prelunch </td><td class='style13'><input type='radio'" + i + "' name='dostime' id='evening_post' />&nbsp; Postlunch</td></tr></table></td><td style='width:60px;' align='right'><input  name='Quantity" + i + "' type='text' placeholder='Qty'  class='form-control input-md' maxlength='3' style='border:0px; text-align:center; width:50px;'></td>");

        $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
        i++;
    });
   
    $("#delete_row").click(function () {
        if (i > 1) {
            $("#addr" + (i - 1)).html('');
            i--;
        }
        if (i == 1) {
            alert("Row delete operation not perform.");
        }


    });


    $("#patientform").bootstrapValidator({

        message: null,

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        fields:
            {
                FirstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },

                LastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                Age: {
                    validators: {

                        digits: {
                            message: 'The Age can contain digits only'
                        },
                        stringLength: {
                            min: 2,
                            max: 3,
                            message: 'Age more than 2 and less than 3 digit'
                        },
                        notEmpty: {
                            message: 'Age is required'
                        }
                    }
                },

                Address: {
                    validators: {
                        notEmpty: {
                            message: 'The Address is required'
                        }
                    }
                },

                PhoneNumber:
                {
                    validators:
                     {
                         digits:
                            {
                                message: 'The mobile number can contain digits only'
                            },

                         stringLength:
                            {
                                min: 10,
                                max: 10,
                                message: 'Enter 10 digit Mobile No.'
                            },

                         notEmpty:
                            {
                                message: 'The Mobile number is required'
                            }
                     }
                },

                MaritalStatus: {
                    validators: {
                        notEmpty: {
                            message: 'The Option cannot be Empty '
                        }
                    }
                },

                EmailId: {
                    validators: {

                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },

                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },

                Gender: {
                    validators: {
                        notEmpty: {
                            message: 'The Option cannot be Empty '
                        }
                    }
                },

                Weight: {
                    validators:
                     {
                         digits:
                             {
                                 notEmpty: {
                                     message: 'Weight can contain digits only'
                                 }
                             }

                     }
                },

                Temperature: {
                    validators:
                     {
                         digits:
                             {
                                 notEmpty: {
                                     message: 'Temperature can contain digits only'
                                 }
                             }
                     }
                }

            }
    });


    $("#registrationform").bootstrapValidator({


        message: null,

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:
        {
            FirstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required',
                        fieldsValid: false
                    }
                }
            },

            LastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required',
                        fieldsValid: false
                    }
                }
            },

            PRNumber: {
                validators: {
                    notEmpty: {
                        message: 'Permanent Registration Number is required',
                        fieldsValid: false
                    }
                }
            },

            email: {
                validators: {

                    notEmpty: {
                        message: 'The email is required and cannot be empty',
                        fieldsValid: false
                    },

                    emailAddress: {
                        message: 'The input is not a valid email address',
                        fieldsValid: false
                    }
                }
            },

            Specialization: {
                validators: {
                    notEmpty: {
                        message: 'Specialization is required',
                        fieldsValid: false
                    }
                }
            },

            Qualification: {
                validators: {
                    notEmpty: {
                        message: 'Qualification is required',
                        fieldsValid: false
                    }
                }
            },

            Age: {
                validators: {

                    digits: {
                        min: 23,
                        max: 100,
                        message: 'The Age can contain digits only',
                        fieldsValid: false
                    },
                    stringLength: {
                        min: 2,
                        max: 3,
                        message: 'Age more than 2 and less than 3 digit',
                        fieldsValid: false
                    },
                    notEmpty: {
                        message: 'Age is required',
                        fieldsValid: false
                    }
                }
            },

            HomeConatct: {
                validators: {
                    digits:
                              {
                                  notEmpty: {
                                      message: 'Contact can contain digits only',
                                      fieldsValid: false
                                  }
                              }
                }
            },

            City: {
                validators: {
                    notEmpty: {
                        message: 'City is required',
                        fieldsValid: false
                    },
                    regexp: {
                        regexp: /^[a-zA-Z_\.]+$/,
                        message: 'The City can only consist of alphabetical.',
                        fieldsValid: false
                    }
                }
            },

            Pincode: {
                validators: {
                    digits: {
                        message: 'Pincode can contain digits only',
                        fieldsValid: false
                    },
                    stringLength: {
                        min: 6,
                        max: 6,
                        message: 'Pincode must be 6 digit',
                        fieldsValid: false
                    },
                    notEmpty: {
                        message: 'The Pincode is required'
                    }
                }
            },

            reg_Gender: {
                validators: {
                    notEmpty: {
                        message: 'The Option cannot be Empty '
                    }
                }
            },

            image: {
                validators: {
                    file: {
                        extension: 'jpeg,png,jpg,JPG,JPEG,PNG',
                        type: 'image/jpeg,image/png,image/jpg,image/JPG,image/JPEG,image/PNG',
                        maxSize: 300 * 250,   // 2 MB
                        message: 'The selected file is not valid.'
                    }

                }
            }

        }
    });


    $("#clinicinformation").bootstrapValidator({

        message: null,

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:
        {
            ClinicName: {
                validators: {
                    notEmpty: {
                        message: 'The Clinic name is required'
                    }
                }
            },

            ClinicAdd: {
                validators: {
                    notEmpty: {
                        message: 'The Clinic Address is required'
                    }
                }
            },
            ClinicContact: {
                validators: {
                    digits: {
                        message: 'Accept only digits.'
                    },

                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Enter 10 digit clinic No.'
                    },

                    notEmpty: {
                        message: 'The Clinic number is required'
                    }
                }
            },

            ClinicEmail: {
                validators: {

                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },

                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });



    $(".numaric_only").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message

            return false;
        }
    });

});

$("#Feesform").bootstrapValidator({

    message: null,

    feedbackicons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields:
            {
                doctorfees: {
                    validators: {
                        notempty: {
                            message: 'field is required'
                        }
                    }
                }
            }

});

function validatefields() {


    $("#patientform").bootstrapValidator({

        message: null,

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        fields:
            {
                FirstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required'
                        }
                    }
                },

                LastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        }
                    }
                },

                Age: {
                    validators: {

                        digits: {
                            message: 'The Age can contain digits only'
                        },
                        stringLength: {
                            min: 2,
                            max: 3,
                            message: 'Age more than 2 and less than 3 digit'
                        },
                        notEmpty: {
                            message: 'Age is required'
                        }
                    }
                },

                Address: {
                    validators: {
                        notEmpty: {
                            message: 'The Address is required'
                        }
                    }
                },

                PhoneNumber:
                {
                    validators:
                     {
                         digits:
                            {
                                message: 'The mobile number can contain digits only'
                            },

                         stringLength:
                            {
                                min: 10,
                                max: 10,
                                message: 'Enter 10 digit Mobile No.'
                            },

                         notEmpty:
                            {
                                message: 'The Mobile number is required'
                            }
                     }
                },

                MaritalStatus: {
                    validators: {
                        notEmpty: {
                            message: 'The Option cannot be Empty '
                        }
                    }
                },

                EmailId: {
                    validators: {

                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },

                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },

                Gender: {
                    validators: {
                        notEmpty: {
                            message: 'The Option cannot be Empty '
                        }
                    }
                },

                Weight: {
                    validators:
                     {
                         digits:
                             {
                                 notEmpty: {
                                     message: 'Weight can contain digits only'
                                 }
                             }

                     }
                },

                Temperature: {
                    validators:
                     {
                         digits:
                             {
                                 notEmpty: {
                                     message: 'Temperature can contain digits only'
                                 }
                             }
                     }
                }

            }
    });

 }


