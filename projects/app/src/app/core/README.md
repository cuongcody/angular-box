# Core

> This module contains services, guards, resolvers, stores (state management purpose) and api - the singleton instances.  
> The `models` sub-package contain the entire model files (interface, class). The other classes which want to use these models should convert to the appropriate sharp.  
> It is imported into `AppModule` only one time. The other importing should cause an error.
> This is the only module that is imported HttpClientModule.

### Sub-packages

+ ***api***
    - purpose: include the classes used to interact with api endpoint to fetch data. This is the only package contains classes which is injected HttpClient.
    - file pattern: *.api.ts

+ ***guards***
    - purpose: include the classes used to guard the Angular route.
    - file pattern: *.guard.ts

+ ***interceptor***
    - purpose: include the classes used to intercept the http requests.
    - file pattern: *.interceptor.ts

+ ***models***
    - purpose: include the classes and the interfaces to create the sharp of the objects.
    - file pattern:
        + interface: *.model.d.ts
        + class: *.model.ts

+ ***resolvers***
    - purpose: include the classes resolve the data after the route event ends.
    - file pattern: *.resolver.ts

+ ***services***
    - purpose: include the classes which get the datum from the api layer (api sub-package), then compose and export result to the other services in an specific feature module. Keep the reactive in mind. This is the only instance which is injected from api layer.
    - file pattern: *.service.ts

+ ***stores***
    - purpose: include the classes that store the states of the application. Keep the reactive in mind.
    - file pattern: *.store.ts
