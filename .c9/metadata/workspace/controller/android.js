{"filter":false,"title":"android.js","tooltip":"/controller/android.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["    }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["    this.saveFile = function() {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      console.log(req.files);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      fs.readFile(req.files.file.path, function(err, data) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        var newPath = self.getTargetPath() + \"upload/\" + req.files.file.originalname;"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        console.log(\"newPath: \" + newPath);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        fs.writeFile(newPath, data, function(err) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["          console.log(\"Finished writing file...\" + err);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        });"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      });"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["    }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["    this.run = function() {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      // this.clean();"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      this.makeWorkDir();"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      this.saveFile();"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      res.send({"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        result: \"ok\","]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["        message: \"file saved successfully!\""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["      });"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":["    }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":27,"column":0},"end":{"row":28,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    var uniqId;"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    this.getTargetPath = function() {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      var targetPath = \"/tmp/\" + req.cookies.uniqId + \"/\";"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      console.log(\"targetPath: \" + targetPath);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      return targetPath;"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    this.makeWorkDir = function() {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      if (!fs.existsSync(this.getTargetPath())) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["        fs.mkdirSync(this.getTargetPath());"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      var dirList = [\"upload\", \"resize\", \"result\"];"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      dirList.forEach(function(i) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["        var targetPath = self.getTargetPath() + i;"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["        if (!fs.existsSync(targetPath)) {"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["          fs.mkdirSync(targetPath);"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["        }"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["      });"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["    }"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":20},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":4},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":4},"end":{"row":8,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":5},"end":{"row":8,"column":6}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":6},"end":{"row":8,"column":7}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":9},"end":{"row":8,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":10},"end":{"row":8,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":11},"end":{"row":8,"column":12}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":12},"end":{"row":8,"column":13}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":13},"end":{"row":8,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":14},"end":{"row":8,"column":15}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":15},"end":{"row":8,"column":16}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":16},"end":{"row":8,"column":17}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":17},"end":{"row":8,"column":18}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":18},"end":{"row":8,"column":19}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":19},"end":{"row":8,"column":20}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":20},"end":{"row":8,"column":21}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":21},"end":{"row":8,"column":22}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":22},"end":{"row":8,"column":23}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":23},"end":{"row":8,"column":24}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":24},"end":{"row":8,"column":26}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":26},"end":{"row":8,"column":27}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":27},"end":{"row":8,"column":28}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":28},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"lines":["      "]},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":7}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":7},"end":{"row":9,"column":8}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":9}},"text":"con"},{"action":"insertText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":13}},"text":"console"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":13},"end":{"row":9,"column":14}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":14},"end":{"row":9,"column":15}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":14},"end":{"row":9,"column":15}},"text":"l"},{"action":"insertText","range":{"start":{"row":9,"column":14},"end":{"row":9,"column":19}},"text":"log()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":18},"end":{"row":9,"column":20}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":19},"end":{"row":9,"column":20}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":20},"end":{"row":9,"column":21}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":21},"end":{"row":9,"column":22}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":22},"end":{"row":9,"column":23}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":23},"end":{"row":9,"column":24}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":24},"end":{"row":9,"column":25}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":25},"end":{"row":9,"column":26}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":26},"end":{"row":9,"column":27}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":27},"end":{"row":9,"column":28}},"text":"!"},{"action":"insertText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":29}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":30},"end":{"row":9,"column":31}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":31},"end":{"row":9,"column":32}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":32},"end":{"row":9,"column":33}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":33},"end":{"row":9,"column":34}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":37},"end":{"row":9,"column":38}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":31},"end":{"row":2,"column":39}},"text":"req, res"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":13}},"text":"android"},{"action":"insertText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":13}},"text":"android"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":13}},"text":"android"},{"action":"insertText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":7},"end":{"row":4,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":8}},"text":"st"},{"action":"insertText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":14}},"text":"strategy"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":13},"end":{"row":12,"column":20}},"text":"android"},{"action":"insertText","range":{"start":{"row":12,"column":13},"end":{"row":12,"column":21}},"text":"strategy"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":21},"end":{"row":12,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1414548333121,"hash":"31c9da90e522ae890d453cb7be3ddd61eaa868d5"}