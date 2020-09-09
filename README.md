# mandatendatabank-mandatarissen-producer

Producer service generating diff files to sync data about mandatees to external applications. 
Diff files generated since a specific timestamp can be fetched by a consuming service 
(e.g. [mandatendatabank-consumer](http://github.com/lblod/mandatendatabank-consumer)).

The service is based on a PoC application which can be found [here](http://github.com/redpencilio/app-poc-diff).

## Tutorials
### Add the service to a stack

Add the service to your `docker-compose.yml`:

```
  mandatendatabank-mandatarissen-producer:
    image: lblod/mandatendatabank-mandatarissen-producer
    volumes:
      - ./data/files:/share
```