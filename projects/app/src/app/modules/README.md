# Modules

> This package contains feature modules of the application.  
> E.g. ShorePersonnelModule.  
> These modules are inside this package should be load lazy. They should have individual models, converter...

### Recommended sub-packages
+ ***converters:*** include the converters used to convert the models in the `core` to the appropriate models inside the module.
+ ***models:*** include the models belongs to the module and the module only.
+ ***services:*** include the services compose the datum from `core` as needed. It is optional.
