// on loading the site hide the inputs where there is a choice of yes or no
//as well hide ✓ and ✖
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("company-website-label").style.display="none";
    document.getElementById("company-website").style.display="none";
    document.getElementById("facebook-user").style.display="none";
    document.getElementById("instagram-user").style.display="none";
    document.getElementById("twitter-user").style.display="none";
    document.getElementById("linkedin-user").style.display="none";
    document.getElementById("discord-user").style.display="none";
    document.getElementById("telegram-user").style.display="none"; 
    document.getElementById("additional-files").style.display="none";   
    document.getElementById("name-hide").style.display="none"
    document.getElementById("email-hide").style.display="none"
    document.getElementById("tel-hide").style.display="none"
    document.getElementById("company-name-hide").style.display="none"
    document.getElementById("company-country-hide").style.display="none"
    document.getElementById("company-website-hide").style.display="none"
    document.getElementById("facebook-hide").style.display="none"
    document.getElementById("instagram-hide").style.display="none"
    document.getElementById("twitter-hide").style.display="none"
    document.getElementById("linkedin-hide").style.display="none"
    document.getElementById("discord-hide").style.display="none"
    document.getElementById("telegram-hide").style.display="none"
})
// website URL displayed or not depending if chosen yes or no
document.getElementById("cwr1").addEventListener("change", () => {
    document.getElementById("company-website-label").style.display="";
    document.getElementById("company-website").style.display="";
    document.getElementById("company-website").setAttribute("required","");
} )
document.getElementById("cwr2").addEventListener("change", () => {
    document.getElementById("company-website-label").style.display="none";
    document.getElementById("company-website").style.display="none";
    document.getElementById("company-website").removeAttribute("required","");
 } )
 // facebook username input displayed or not depending if chosen yes or no
document.getElementById("f1").addEventListener("change", () => {
        document.getElementById("facebook-user").style.display="";
        document.getElementById("facebook-user").setAttribute("required","");
    })
document.getElementById("f2").addEventListener("change", () => {
        document.getElementById("facebook-user").style.display="none";
        document.getElementById("facebook-user").removeAttribute("required","");
    })
// instagram username input displayed or not depending if chosen yes or no
document.getElementById("i1").addEventListener("change", () => {
    document.getElementById("instagram-user").style.display="";
    document.getElementById("instagram-user").setAttribute("required","");
})
document.getElementById("i2").addEventListener("change", () => {
    document.getElementById("instagram-user").style.display="none";
    document.getElementById("instagram-user").removeAttribute("required","");

})
// twitter username input displayed or not depending if chosen yes or no
document.getElementById("t1").addEventListener("change", () => {
    document.getElementById("twitter-user").style.display="";
    document.getElementById("twitter-user").setAttribute("required","");

})
document.getElementById("t2").addEventListener("change", () => {
    document.getElementById("twitter-user").style.display="none";
    document.getElementById("twitter-user").removeAttribute("required","");
})
// linkedin username input displayed or not depending if chosen yes or no
document.getElementById("l1").addEventListener("change", () => {
    document.getElementById("linkedin-user").style.display="";
    document.getElementById("linkedin-user").setAttribute("required","");

})
document.getElementById("l2").addEventListener("change", () => {
    document.getElementById("linkedin-user").style.display="none";
    document.getElementById("linkedin-user").removeAttribute("required","");
})
// discord username input displayed or not depending if chosen yes or no
document.getElementById("d1").addEventListener("change", () => {
    document.getElementById("discord-user").style.display="";
    document.getElementById("discord-user").setAttribute("required","");

})
document.getElementById("d2").addEventListener("change", () => {
    document.getElementById("discord-user").style.display="none";
    document.getElementById("discord-user").removeAttribute("required","");
})
// telegram username input displayed or not depending if chosen yes or no
document.getElementById("te1").addEventListener("change", () => {
    document.getElementById("telegram-user").style.display="";
    document.getElementById("telegram-user").setAttribute("required","");

})
document.getElementById("te2").addEventListener("change", () => {
    document.getElementById("telegram-user").style.display="none";
    document.getElementById("telegram-user").removeAttribute("required","");
})
// add other button social network
let CounterSocialNetwork = 0;
document.getElementById("social-network-button").addEventListener("click", () => {    
    let SocialNetworkExtraContainer = document.createElement("div");
    SocialNetworkExtraContainer.style.display = "flex";
    SocialNetworkExtraContainer.style.verticalAlign = "middle";
    SocialNetworkExtraContainer.style.marginBottom = "25px";
    SocialNetworkExtraContainer.id = "SocialNetworkExtraContainer" + CounterSocialNetwork;    
    document.getElementById("social-network-additional").appendChild(SocialNetworkExtraContainer);
    let SocialNetworkExtra = document.createElement("input"); 
    SocialNetworkExtra.classList.add("input-field");
    SocialNetworkExtra.type = "text"; 
    SocialNetworkExtra.maxLength = "100";
    SocialNetworkExtra.style.width = "45%";  
    SocialNetworkExtra.style.marginRight = "5%";
    SocialNetworkExtra.required = true;
    SocialNetworkExtra.id = "SocialNetworkExtra" + CounterSocialNetwork;
    SocialNetworkExtra.name = "SocialNetworkExtra" + CounterSocialNetwork;
    SocialNetworkExtra.placeholder = "Social network name";
    document.getElementById(SocialNetworkExtraContainer.id).appendChild(SocialNetworkExtra);
    let SocialNetworkExtraUser = document.createElement("input");
    SocialNetworkExtraUser.classList.add("input-field");
    SocialNetworkExtraUser.type = "text";
    SocialNetworkExtraUser.maxLength = "100";
    SocialNetworkExtraUser.style.width = "45%";
    SocialNetworkExtraUser.style.marginRight = "2%";
    SocialNetworkExtraUser.required = true;
    SocialNetworkExtraUser.id = "SocialNetworkExtraUser" + CounterSocialNetwork;
    SocialNetworkExtraUser.name = "SocialNetworkExtraUser" + CounterSocialNetwork;
    SocialNetworkExtraUser.placeholder = "User name";
    document.getElementById(SocialNetworkExtraContainer.id).appendChild(SocialNetworkExtraUser);    
    let SocialNetworkCloseButtonImg = document.createElement("img");
    SocialNetworkCloseButtonImg.id = "SocialNetworkCloseButtonImg" + CounterSocialNetwork;
    SocialNetworkCloseButtonImg.src = "img/close-button.png";
    SocialNetworkCloseButtonImg.style.maxWidth = "25px";
    SocialNetworkCloseButtonImg.style.objectFit = "contain";
    document.getElementById(SocialNetworkExtraContainer.id).appendChild(SocialNetworkCloseButtonImg);
    let SocialNetworkSpan = document.createElement("span");
    document.getElementById(SocialNetworkExtraContainer.id).appendChild(SocialNetworkSpan);
    SocialNetworkCloseButtonImg.addEventListener("click", () => {
        document.getElementById(SocialNetworkExtraContainer.id).remove();
    })
    CounterSocialNetwork += 1;
})
// add other button local directories
let CounterLocalDirectories = 0;
document.getElementById("local-directories-button").addEventListener("click", () => {    
    let LocalDirectoriesContainer = document.createElement("div");
    LocalDirectoriesContainer.style.display = "flex";
    LocalDirectoriesContainer.style.verticalAlign = "middle";
    LocalDirectoriesContainer.style.marginBottom = "25px"
    LocalDirectoriesContainer.id = "LocalDirectoriesContainer" + CounterLocalDirectories;
    document.getElementById("local-directories-additional").appendChild(LocalDirectoriesContainer);
    let LocalDirectoriesExtra = document.createElement("input");
    LocalDirectoriesExtra.required = "true";
    LocalDirectoriesExtra.maxLength = "100";
    LocalDirectoriesExtra.classList.add("input-field");
    LocalDirectoriesExtra.type = "text";
    LocalDirectoriesExtra.style.marginRight = "2%";
    LocalDirectoriesExtra.id = "LocalDirectoriesExtra" + CounterLocalDirectories;
    LocalDirectoriesExtra.name = "LocalDirectoriesExtra" + CounterLocalDirectories;
    LocalDirectoriesExtra.placeholder = "Local directory name";
    document.getElementById(LocalDirectoriesContainer.id).appendChild(LocalDirectoriesExtra);
    let LocalDirectoriesCloseButtonImg = document.createElement("img");
    LocalDirectoriesCloseButtonImg.id = "LocalDirectoriesCloseButtonImg" + CounterLocalDirectories;
    LocalDirectoriesCloseButtonImg.src = "img/close-button.png";
    LocalDirectoriesCloseButtonImg.style.maxWidth ="25px";
    LocalDirectoriesCloseButtonImg.style.objectFit = "contain";
    document.getElementById(LocalDirectoriesContainer.id).appendChild(LocalDirectoriesCloseButtonImg);
    let LocalDirectoriesSpan = document.createElement("span");
    document.getElementById(LocalDirectoriesContainer.id).appendChild(LocalDirectoriesSpan);
    LocalDirectoriesCloseButtonImg.addEventListener("click", () => {
        document.getElementById(LocalDirectoriesContainer.id).remove();
    })    
    CounterLocalDirectories += 1;
})
// add additional files displayed depending if chosen yes or no
document.getElementById("mp1").addEventListener("change", () => {
    document.getElementById("additional-files").style.display="";
})
document.getElementById("mp2").addEventListener("change", () => {
    document.getElementById("additional-files").style.display="none";
})
//remove ✓ and ✖ before there is something typed in the input
document.getElementById("name").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#name') == true) {
     document.getElementById("name-hide").style.display="none";
  } else if (placeholderActive('#name') == false) {
    document.getElementById("name-hide").style.display="";  
}
})
document.getElementById("email").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#email') == true) {
     document.getElementById("email-hide").style.display="none";
  } else if (placeholderActive('#email') == false) {
    document.getElementById("email-hide").style.display="";  
}
})
document.getElementById("tel").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#tel') == true) {
     document.getElementById("tel-hide").style.display="none";
  } else if (placeholderActive('#tel') == false) {
    document.getElementById("tel-hide").style.display="";  
}
})
document.getElementById("company-name").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#company-name') == true) {
     document.getElementById("company-name-hide").style.display="none";
  } else if (placeholderActive('#company-name') == false) {
    document.getElementById("company-name-hide").style.display="";  
}
})
document.getElementById("company-country").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#company-country') == true) {
     document.getElementById("company-country-hide").style.display="none";
  } else if (placeholderActive('#company-country') == false) {
    document.getElementById("company-country-hide").style.display="";  
}
})
//radio buttons remove ✓ and ✖ before there is something typed in the input
//website url
document.getElementById("company-website").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#company-website') == true) {
     document.getElementById("company-website-hide").style.display="none";
  } else if (placeholderActive('#company-website') == false) {
    document.getElementById("company-website-hide").style.display="";  
  }
})
document.getElementById("cwr2").addEventListener("click", () => {
    document.getElementById("company-website-hide").style.display="none";
    document.getElementById("company-website").value = "";
  
})
//facebook
document.getElementById("facebook-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#facebook-user') == true) {
     document.getElementById("facebook-hide").style.display="none";
  } else if (placeholderActive('#facebook-user') == false) {
    document.getElementById("facebook-hide").style.display="";  
  }
})
document.getElementById("f2").addEventListener("click", () => {
    document.getElementById("facebook-hide").style.display="none";
    document.getElementById("facebook-user").value = "";
  
})
//instagram
document.getElementById("instagram-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#instagram-user') == true) {
     document.getElementById("instagram-hide").style.display="none";
  } else if (placeholderActive('#instagram-user') == false) {
    document.getElementById("instagram-hide").style.display="";  
  }
})
document.getElementById("i2").addEventListener("click", () => {
    document.getElementById("instagram-hide").style.display="none";
    document.getElementById("instagram-user").value = "";
  
})
//twitter
document.getElementById("twitter-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#twitter-user') == true) {
     document.getElementById("twitter-hide").style.display="none";
  } else if (placeholderActive('#twitter-user') == false) {
    document.getElementById("twitter-hide").style.display="";  
  }
})
document.getElementById("t2").addEventListener("click", () => {
    document.getElementById("twitter-hide").style.display="none";
    document.getElementById("twitter-user").value = "";
  
})
//linkedin
document.getElementById("linkedin-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#linkedin-user') == true) {
     document.getElementById("linkedin-hide").style.display="none";
  } else if (placeholderActive('#linkedin-user') == false) {
    document.getElementById("linkedin-hide").style.display="";  
  }
})
document.getElementById("l2").addEventListener("click", () => {
    document.getElementById("linkedin-hide").style.display="none";
    document.getElementById("linkedin-user").value = "";
  
})
//discord
document.getElementById("discord-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#discord-user') == true) {
     document.getElementById("discord-hide").style.display="none";
  } else if (placeholderActive('#discord-user') == false) {
    document.getElementById("discord-hide").style.display="";  
  }
})
document.getElementById("d2").addEventListener("click", () => {
    document.getElementById("discord-hide").style.display="none";
    document.getElementById("discord-user").value = "";
  
})
//telegram
document.getElementById("telegram-user").addEventListener("change", () => {
    function placeholderActive(selector) {
    return !!document.querySelector(selector + ':placeholder-shown');
  }
  if (placeholderActive('#telegram-user') == true) {
     document.getElementById("telegram-hide").style.display="none";
  } else if (placeholderActive('#telegram-user') == false) {
    document.getElementById("telegram-hide").style.display="";  
  }
})
document.getElementById("te2").addEventListener("click", () => {
    document.getElementById("telegram-hide").style.display="none";
    document.getElementById("telegram-user").value = "";
  
})
// file uploads
let uploadField = document.getElementById("file");
let FilesNames = document.getElementById("files-names");
let FilesUploadCounter = 0;

uploadField.onchange = function() {
  for (i = 0; i < this.files.length; i++) {
  if (this.files[i].size > 2097152) {
    FilesNames.innerText = "File is too big! (maximum upload is 20mb)";
    FilesNames.style.color = "red";
    this.value = "";
   
  }
}
if (this.files.length > 10) {
    FilesNames.innerText = "Too many files! (maximum upload is 10 files)";
    FilesNames.style.color = "red";
    this.value = "";
} 

if (this.files.length > 0) {
    for(i = 0; i < this.files.length; i++){
        let ListOfNamesContainer = document.createElement("div");
        ListOfNamesContainer.style.display = "flex";
        ListOfNamesContainer.style.justifyContent = "space-between";
        ListOfNamesContainer.id = FilesUploadCounter;
        let ListOfNames = document.createElement("p");
        ListOfNames.id = "ListOfNames" + FilesUploadCounter;
        FilesNames.appendChild(ListOfNamesContainer);
        ListOfNamesContainer.appendChild(ListOfNames);
        ListOfNames.innerText = this.files[i].name;
        let ListOfNamesCloseButtonimg = document.createElement("img");
        ListOfNamesCloseButtonimg.src = "img/close-button.png";
        ListOfNamesCloseButtonimg.style.maxWidth = "25px";
        ListOfNamesCloseButtonimg.style.objectFit = "contain";
        ListOfNamesContainer.appendChild(ListOfNamesCloseButtonimg);
                    
        ListOfNamesCloseButtonimg.addEventListener("click", () => {
            document.getElementById(ListOfNamesContainer.id).remove();
        })
        FilesUploadCounter += 1;
    }
}
};

/* delete button on files chosen does not remove the file from the actual list 
only removes the name. if you try to upload files several times the files
from the first time will be remove from the actual list but the names will stay.
the error messages of invalid input needs to be adjusted. 
at the moment the maximum upload size of a file is 2mb and no more than 10 files
doesnt scale down for mobile.
*/


