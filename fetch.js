const fs = require('fs');
fetch('https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY1OGZlNDcxNWM4NzQzOGNiMTE2NmUwMmRmMDY0YzlmEgsSBxCq7L_PjRkYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTEyNTg0MTk5MjM4NDE0ODU5&filename=&opi=89354086')
  .then(r => r.text())
  .then(t => fs.writeFileSync('temp_nakula.html', t));
fetch('https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2JkZjU0OTg5NzBhNzQ3OGJhYjVkMmQzOGM2ZDgzZmY0EgsSBxCq7L_PjRkYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTEyNTg0MTk5MjM4NDE0ODU5&filename=&opi=89354086')
  .then(r => r.text())
  .then(t => fs.writeFileSync('temp_pro.html', t));
