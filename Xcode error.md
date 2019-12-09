Error: 
Referenced from: /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
  Expected in: /opt/local/lib/libsqlite3.dylib
 in /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
git: error: unable to locate xcodebuild, please make sure the path to the Xcode folder is set correctly!
git: error: You can set the path to the Xcode folder using /usr/bin/xcode-select -switch

Solution: 
xcode-select --install
sudo xcode-select -switch /Library/Developer/CommandLineTools
