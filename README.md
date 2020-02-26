# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version **8.3.19.**

> **Angular Version: Angular: 8.2.14**


## General

### Version 1.0:  

> 1.Component Based Architecture : A hybrid of "Feature-based architecture" + "Layered architecture"

> 2.Apply Domain Driven Design with : 

> - Infrastructure Module: DataService( HTTP, LocalStorage, Websocket, Files, Firebase ), ConfigurationService, TranslationService, AppStateService
> - Feature Module(Domain + Application + Interface) : User Module, Todolist Module

#### Details

1.DataService

> Let's explore this: the SPA need to interact with a backend service(provided REST API), interact with another chat service(by websocket), aggregate with localstorage data, read local files(eg: navigation links, countries list)

2.ConfigurationService

> An application's configuration can be loaded from a specific config file which flagged by enviroment settings, also can be loaded from a backend service

3.TranslationService

> Sometimes your application should support user to switch to another language, and also for code management target, you need to get the text from a specific locale file.


4.AppStateService

> Background : No matter which framework you choose — you should ask yourself about the **<u>app’s state management</u>** first because building a frontend architecture and choosing the appropriate way of managing state is one of the biggest challenges. Let's dive deeply

> #### State management strategies: what are the options? 
> 1.Through hierarchical component’s interaction, typically use of stateful and stateless components via @Input bindings and @Output custom events.  
> 2.Through Angular services by using simple variables for temporary data saving and Promises as the most common type of Push system in JavaScript today. 
> 3.Through Observable data services — Angular services with RxJS library, which is the reactive “b̶e̶a̶s̶t̶” extension of JavaScript
> 4.Through Redux Pattern with RxJS library.

> **Take a look at these pictures**

!['hierarchical component interaction'][hierarchical_component_interaction]

> **Hierarchical component’s interaction**

!['simple-states-through-angular-service'][simple_states_through_angular_service]

> **Through Angular services by using simple variables and Promises**


![ng_service_with_rxjs_pattern][[ng_service_with_rxjs_pattern]]

> **Angular services with RxJS library**

!['state-management-with-redux'][state_management_with_redux]

> **RxJS Pattern with Redux**

[hierarchical_component_interaction]: ./assets/hierarchical-component-interaction.png
[simple_states_through_angular_service]: /assets/simple-states-through-angular-service.png
[state_management_with_redux]: /assets/state-management-with-redux.png
[ng_service_with_rxjs_pattern]: /assets/ng-service-with-rxjs-pattern.png

### Definitions

> **Infrastructure Module** : communicate with other layers in model which consists of everything that exists independently of our application: external libraries, database engine, application server, messaging backend and so on

> **Feature Module** includes high cohesive components which implements by:
 - Interfaces(handles interpretation, validation and translation of incoming data)
 - Application(driving the workflow of the application, matching the use cases at hand, coordinates the domain layer objects to perform the actual work)
 - Domain : the heart of the software which make business decitions. There is one package per aggregate, and to each aggregate belongs entities, value objects, domain events, a repository interface and sometimes factories. The aggregate roots are Cargo, HandlingEvent, Location and Voyage.

 > **SPA:** single page application